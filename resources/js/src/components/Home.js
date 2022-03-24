import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import AppContainer from "./AppContainer";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const fetchPosts = () => {
        api.getAllPosts().then((res) => {
            const result = res.data;
            setPosts(result);
        });
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPost = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">Loading Posts ... </td>
                </tr>
            );
        }
        if (posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4">There is no post yet !</td>
                </tr>
            );
        } else {
            return posts.map((post) => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>
                        <Link
                            to={`edit/${post.id}`}
                            className="btn btn-warning"
                        >
                            Edit
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <button
                            onClick={async () => {
                                try {
                                    await api
                                        .deletePost(post.id)
                                        .then((res) => {
                                            fetchPosts();
                                        });
                                } catch {
                                    alert("NoteDelted");
                                }
                            }}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ));
        }
    };

    return (
        <AppContainer title="Laravel ReactJS-CRUD ">
            <Link className="btn btn-primary" to="/add">
                Add Post
            </Link>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Title.</th>
                            <th>Description.</th>
                            <th>Action.</th>
                        </tr>
                    </thead>
                    <tbody>{renderPost()}</tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;
