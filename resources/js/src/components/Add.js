import React, { useState } from "react";
import api from "../api";
import AppContainer from "./AppContainer";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const history = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.addPost({ title, description });
            history("/");
        } catch {
            alert("error");
        } finally {
            setLoading(false);
            setTitle("");
            setDesc("");
        }
    };

    return (
        <AppContainer title="Add Post">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <button
                        onClick={onSubmit}
                        type="button"
                        className="btn btn-success"
                        style={{ marginTop: "2em", width: "12em" }}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "ADD"}
                    </button>
                    &nbsp;&nbsp;
                    <button
                        onClick={() => history("/")}
                        className="btn btn-warning"
                        style={{ marginTop: "2em", width: "12em" }}
                    >
                        {`<< ${" "}Back`}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;
