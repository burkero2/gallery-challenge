import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from "../posts.json"
import Loader from "./Loader"

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange(event){
        const name = event.target.value;
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState ({ 
            posts:filteredPosts, 
        })
    }

    render() {
        return (
            <div className={css.Content}>
                
                <div className = {css.TitleBar}> 
                    <h1>My Photos</h1>

                    <form>
                        <label>Search:</label>
                        <input type = "text" id = "searchInput" placeholder = "By Author" onChange={(e) => this.handleChange(e)} />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                    
                </div>
                <div className={css.SearchResults}>
                    { this.state.isLoaded ? (
                        <div className={css.SearchItem}>
                            {/* Must also change savedPosts to this.state.posts */}
                            {this.state.posts.map(post => {
                                return(
                                    <div key = {post.title}>
                                        <p><strong>Title:</strong> {post.title}</p>
                                        <p><strong>Artist:</strong> {post.name}</p>
                                        <img src={post.image} alt = {post.title}/>
                                        <p><strong>Description:</strong> {post.description}</p>
                                    </div>
                                )}
                            )}
                        </div>
                    ):(
                        <Loader />
                    )}
                </div>
            </div>
        )
    }
}

export default Content
