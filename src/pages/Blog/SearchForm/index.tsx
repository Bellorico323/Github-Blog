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
  const {posts} = usePosts()

  const {
    register, 
    watch,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const query = watch('query')
  console.log(query)
  return (
    <SearchFormContainer>
      <label htmlFor="query">Publicações  <span>{posts.length} publicações</span></label>
      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        {...register('query')}
        autoComplete="off"
      />
    </SearchFormContainer>
  );
} 