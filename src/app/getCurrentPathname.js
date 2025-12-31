const getCurrentPathname = (pathname) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    const path = segments.slice(2).join("/");
    return path.startsWith("/") ? path : `/${path}`;
};
export default getCurrentPathname;