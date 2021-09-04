import { articles } from "../../../data";
import article from "../../article/[id]";

//get specific id articles
export default function handler({query: {id}}, result) {

  const filtered = articles.filter(article => article.id === id)
  if(filtered.length > 0){
      result.status(200).json(filtered[0])
  } else {
      result.status(400).json({message: `The news from id: ${id} is not found`})
  }

}
