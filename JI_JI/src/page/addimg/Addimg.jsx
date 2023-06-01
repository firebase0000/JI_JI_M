import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "/src/firebase";
import db from "/src/firebase";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";
const FileUpload = (list, setter) => {
  const [clients, setclients] = useState([
    { name: "Loading...", id: "initial" }
  ]);
  useEffect(
    () =>
      onSnapshot(collection(db, "clients"), (snapshot) =>
        setclients(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  const [progrss, setProgrss] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [file, setFile] = useState();
  const [url, setUrl] = useState();

  const onFileUpload = () => {
    if (!file) return;
    setIsLoading(true);
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgrss(progress);
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
          setIsLoading(false);
        });
      }
    );
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    e.preventDefault();
  };
  const handleEdit = async (id, name, email) => {
    const docRef = doc(db, "clients", id);
    onFileUpload();
    const payload = { name, email, url, id };

    setDoc(docRef, payload);
  };

  return (
    <>
      <div>
        <div className="add_resolet" id="scrollbar1">
          {clients?.map((client) => (
            <div className="add_resolet_clint">
              <h1 className="add_resolet_clint_text">{client.name}</h1>
              <h1 className="add_resolet_clint_text"> {client.id}</h1>
              <input
                className="add_resolet_clint_img"
                type="file"
                onChange={onFileChange}
              />
              <button
                className="add_resolet_clint_button"
                onClick={() => handleEdit(client.id, client.name, client.email)}
              >
                add image
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
