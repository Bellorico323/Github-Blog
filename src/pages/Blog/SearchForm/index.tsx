import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { usePosts } from "../../../hooks/usePosts";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {posts, getPosts} = usePosts()

  const {
    register,
    handleSubmit
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await getPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <label htmlFor="query">Publicações  <span>{posts.length} publicações</span></label>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            autoComplete="off"
            onKeyDown={() => handleSubmit} 
            {...register('query')}
      />
    </SearchFormContainer>
  );
} 