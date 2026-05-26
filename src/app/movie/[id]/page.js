import MovieContainer from "@/containers/MovieContainer"

const page = async ({params}) => {
  const { id } = await params;
  return (
    <MovieContainer id={id} />
  )
}

export default page