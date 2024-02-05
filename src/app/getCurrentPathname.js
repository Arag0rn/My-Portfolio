const getCurrentPathname = (pathname) => {
    const currentPath = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (currentPath === 'en' || currentPath === 'de') {
        return '/'
    } else {
        return currentPath
    }
} 
export default getCurrentPathname;