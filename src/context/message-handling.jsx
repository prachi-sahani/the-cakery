import { useState, createContext, useContext } from "react";

const MessageHandlingContext = createContext();

function MessageHandlingProvider({children}){
  const [errorMessage, setErrorMessage] = useState("")
  const [showFilterSection, setShowFilterSection] = useState(false)

    function showSnackbar(message){
        setErrorMessage(message);
      }
    
    function dismissSnackbar(){
        setErrorMessage("")
      }
    return(
        <MessageHandlingContext.Provider value={{
            showSnackbar,
            dismissSnackbar,
            errorMessage,
            showFilterSection,
            setShowFilterSection
        }}>
            {children}
        </MessageHandlingContext.Provider>
    )
}

const useMessageHandling = () => useContext(MessageHandlingContext);

export { useMessageHandling, MessageHandlingProvider}