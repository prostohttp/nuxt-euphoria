export default defineNuxtRouteMiddleware((to, from) => {
    // TODO: Implement authentication check for admin routes
    if (to.path.startsWith("/admin") && !to.path.endsWith("/admin/auth")) {
        // return navigateTo("/admin/auth");
    }
});
