<script setup lang="ts">
    import {
        BookOpen,
        Bot,
        Command,
        Frame,
        LifeBuoy,
        Map,
        PieChart,
        Send,
        Settings2,
        SquareTerminal,
    } from "lucide-vue-next";

    import NavMain from "~/components/admin/blocks/NavMain.vue";
    import NavProjects from "~/components/admin/blocks/NavProjects.vue";
    import NavSecondary from "~/components/admin/blocks/NavSecondary.vue";
    import NavUser from "~/components/admin/blocks/NavUser.vue";
    import {
        Sidebar,
        SidebarContent,
        SidebarFooter,
        SidebarHeader,
        SidebarMenu,
        SidebarMenuButton,
        SidebarMenuItem,
        type SidebarProps,
    } from "@/components/ui/sidebar";

    const props = withDefaults(defineProps<SidebarProps>(), {
        variant: "inset",
    });

    const data = {
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "",
        },
        navMain: [
            {
                title: "Playground",
                url: "#",
                icon: SquareTerminal,
                isActive: true,
                items: [
                    {
                        title: "History",
                        url: "#",
                    },
                    {
                        title: "Starred",
                        url: "#",
                    },
                    {
                        title: "Settings",
                        url: "#",
                    },
                ],
            },
            {
                title: "Models",
                url: "#",
                icon: Bot,
                items: [
                    {
                        title: "Genesis",
                        url: "#",
                    },
                    {
                        title: "Explorer",
                        url: "#",
                    },
                    {
                        title: "Quantum",
                        url: "#",
                    },
                ],
            },
            {
                title: "Documentation",
                url: "#",
                icon: BookOpen,
                items: [
                    {
                        title: "Introduction",
                        url: "#",
                    },
                    {
                        title: "Get Started",
                        url: "#",
                    },
                    {
                        title: "Tutorials",
                        url: "#",
                    },
                    {
                        title: "Changelog",
                        url: "#",
                    },
                ],
            },
            {
                title: "Settings",
                url: "#",
                icon: Settings2,
                items: [
                    {
                        title: "General",
                        url: "#",
                    },
                    {
                        title: "Team",
                        url: "#",
                    },
                    {
                        title: "Billing",
                        url: "#",
                    },
                    {
                        title: "Limits",
                        url: "#",
                    },
                ],
            },
        ],
        navSecondary: [
            {
                title: "Support",
                url: "#",
                icon: LifeBuoy,
            },
            {
                title: "Feedback",
                url: "#",
                icon: Send,
            },
        ],
        projects: [
            {
                name: "Design Engineering",
                url: "#",
                icon: Frame,
            },
            {
                name: "Sales & Marketing",
                url: "#",
                icon: PieChart,
            },
            {
                name: "Travel",
                url: "#",
                icon: Map,
            },
        ],
    };
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <a href="#">
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                            >
                                <Command class="size-4" />
                            </div>
                            <div
                                class="grid flex-1 text-left text-sm leading-tight"
                            >
                                <span class="truncate font-medium">
                                    Euphoria
                                </span>
                                <span class="truncate text-xs">Enterprise</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <NavMain :items="data.navMain" />
            <NavProjects :projects="data.projects" />
            <NavSecondary :items="data.navSecondary" class="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="data.user" />
        </SidebarFooter>
    </Sidebar>
</template>
