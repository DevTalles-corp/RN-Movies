import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  // const { movieId } = useRoute().params;
  const { isLoading, movie } = useMovie( movieId );

  if ( isLoading ) {
    return <Text>Loading</Text>
  }

  


  return (
    <ScrollView>
      
      {/* Header */}
      <MovieHeader 
        originalTitle={ movie!.originalTitle} 
        title={ movie!.title}
        poster={ movie!.poster }
      />


      {/* Details */}
      <MovieDetails movie={ movie! } />


    </ScrollView>
  )
}