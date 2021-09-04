import { articles } from "../../../data";

//get all articles
export default function handler(request, result) {
    result.status(200).json(articles)
}

