import axios from "axios";
import React, { useState } from 'react'

export const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage)

    try {
        const response = await axios.post("https://api.imgbb.com/1/upload?key=9ed490a9ed72519d66daf39c3d9d195b", formData)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
  }
  
const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0])
}
  return (
    <div>
        <input type="file" accept="image/*" onChange={handleImageSelect}/>
        <button onClick={handleImageUpload}>Subir imagen</button>
    </div>
  )
}
