import React, { useRef, useState } from "react";
import { Avatar, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Card, CardHeader } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const UploadAvatar = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeInKB = file.size / 1024;
      if (fileSizeInKB > 512) {
        alert("File size must be less than 512KB");
       
        fileInputRef.current.value = "";
        setSelectedImage(null);
      } else {
       
        console.log("create object URL",URL.createObjectURL(file));
        setSelectedImage(URL.createObjectURL(file));
      }
    }
  };

  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="50%"
      height="300px"
      mt="20"
      oxShadow='md'
    
    >
      <CardHeader
        display="flex"
        alignItems="center"
        flexDirection="column"
        position="relative"
        width="max-content"
      >
        <Avatar
          pt="2"
          px="1"
          size="2xl"
          name="Segun Adebayo"
          src={selectedImage || "https://bit.ly/sage-adebayo"}
          style={{ backgroundColor: 'rgba(55, 215, 165, 1)' }}
        />

        <InputGroup
        position="absolute" bottom="3rem" right="-6rem"
        >
          <InputLeftElement
            pointerEvents="all"
            onClick={handleIconClick}
            children={<FaCamera cursor="pointer" size="24" />}
            color="gray.500"
          />
          <Input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </InputGroup>
      </CardHeader>
    </Card>
  );
};

export default UploadAvatar;
