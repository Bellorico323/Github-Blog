import { usePosts } from "../../hooks/usePosts"
import { PostInfo } from "./PostInfo"
import { Content } from "./style"
import Markdown from 'react-markdown'


export function Post() {
  const {data} = usePosts()

  return (
    <div>
      <PostInfo/>
      <Content>
        <Markdown>
           {data.body} 
        </Markdown>
      </Content>
    </div>
  )
}