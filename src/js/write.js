import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";

document.querySelector("#shoeImage").addEventListener("change", onImageSelected);
document.forms["shoeForm"].addEventListener("submit", onAddShoe);

function onAddShoe(e) {
    e.preventDefault();
    uploadNewShoePick();
    }
    
    function onImageSelected(e) {
        let file = e.target.files[0];
        document.querySelector(".display img").src = URL.createObjectURL(file);
    }

    async function uploadNewShoePick() {
        // form data
        const shoe = document.querySelector('#shoeName').value.trim();
        const file = document.querySelector('#shoeImage').files[0]
        
        // paths to the data to write
        const imageRef =     storageRef( storage, `images/${file.name}`);
        const dataRef =  databaseRef( db, 'shoes')

        // uploading file to the storage bucket
        const uploadResult = await uploadBytes(imageRef, file);
        // url to the image stored in storage bucket
        const urlPath =  await getDownloadURL(imageRef) 
        // path on the storage bucket to the image
        const storagePath = uploadResult.metadata.fullPath;

        // firebase unique key
        const itemRef = await push(dataRef)
        
        set(itemRef,{
           key:itemRef.key,
           sku:`jhvr${itemRef.key}`,
           urlPath,
           storagePath,
           city,
           price:12499
        })
        
    }