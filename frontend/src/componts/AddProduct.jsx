import React, { useState } from 'react'

const AddProduct = () => {
    const [noOfImages,setOfImages] = useState(1);
  return (
    <div>
      <form action="">
            <input type="text" name={"title"} placeholder='Enter title ....' />
            <input type="text" name={"description"} placeholder='Enter product description...' />
            <select name="" id=""> onSelect={(event)=>{
                console.log(event.target)
                setNoOfImages(parent(event.target.value));
            }}
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
            </select>
            <label htmlFor="">Add Images</label>
            {
                noOfImages.map((ele)=>(
                    <input type="file" accept='image/*' /> 
                ))
            }
      </form>
    </div>
  )
}

export default AddProduct
