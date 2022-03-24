import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import AppContainer from "./AppContainer";

const Edit = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api.getOnePost(id).then((res) => {
            const data = res.data;
            setTitle(data.title);
            setDesc(data.description);
        });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.updatePost({ title, description }, id);
            history("/");
        } catch {
            alert("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="Edit Post">
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
                        value={description}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                    ></textarea>
                </div>
                <div className="form-group">
                    <button
                        onClick={onSubmit}
                        type="button"
                        className="btn btn-success"
                        style={{ marginTop: "2em", width: "12em" }}
                    >
                        {loading ? "Loading..." : "Update"}
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

export default Edit;
