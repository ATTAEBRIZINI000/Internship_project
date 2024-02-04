#### UploadAvatar Interview test

Interview project for the UploadAvatar component, a React component designed for handling avatar uploads with Chakra UI.
Overview

The UploadAvatar component allows users to upload an avatar image. It features an avatar display, a file input hidden behind a camera icon, and the ability to handle image uploads with size validation.

#### Installation

To use the UploadAvatar component, follow these steps:

Install Chakra UI in your React project if not already installed:

```bash

npm install @chakra-ui/react react-icons

```

1. **Import the necessary Chakra UI components and icons:**

````javascript

import {
  Avatar,
  InputGroup,
  Input,
  InputLeftElement,
  Card,
  CardHeader,
} from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

**2. Import the UploadAvatar component:**

```javascript

import UploadAvatar from "./components/UploadAvatar";
````

#### Usage

// Integrate the UploadAvatar component in your React application as follows:

```javascript
import React from "react";
import UploadAvatar from "./components/UploadAvatar"; 

const YourComponent = () => {
  return (
    <div>
      <UploadAvatar />
    </div>
  );
};
```

export default YourComponent;

#### Features

1. Avatar Display

2.The component displays an avatar with a default image (if none is selected) and a name.
Upload Icon

3. A camera icon is provided to trigger the file input for uploading an image.
   File Size Validation

4. The component checks the size of the uploaded image. If the size exceeds 512KB, an alert is shown, and the file input is cleared.
   Usage Example

### Clone the repository:

```bash

git clone https://github.com/ATTAEBRIZINI000/Internship_project.git
```

### Install dependencies:

```bash

npm install
```

Make changes to the component as needed.

Test your changes:

```bash

npm test

```

    Submit a pull request with your changes.
