import CommentList from "./CommentList"
import AddComment from "./AddComment";

import {col , Container , Row } from "react-bootstrap"


class CommentArea extends Component{
 state = {
    comments: [], 
 }
 getComments = async () => {
    try {
        const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId,{
            headers:{
                Authorization:keyApi,
            },

        }
        )
        if(res.ok){
            const data = await res.json()
            console.log('data',data)

        }
    }

 }
}