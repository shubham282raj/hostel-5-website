export const validateFile = (event, size) => {
    
    // Check if a file is selected
    if (event.target.files.length > 0) {
        var fileSizeInKB = event.target.files[0].size / 1024; // Convert bytes to KB

        // Check if the file size is greater than 500 KB
        if (fileSizeInKB > size) {
            event.target.value = ''; // Clear the file input
            window.alert(`File size cannot be more than ${size}KBs`)
            return false;
        } else {
            return true;
        }
    }
}