"use Client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#333333",
          color: "#ffffff",
        }
      }}
    />
  )
}

export default ToasterProvider;