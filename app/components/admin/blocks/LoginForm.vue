<script setup lang="ts">
    import { Button } from "@/components/ui/button";
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card";
    import { Input } from "@/components/ui/input";
    import { toTypedSchema } from "@vee-validate/zod";
    import { useForm } from "vee-validate";
    import type { HTMLAttributes } from "vue";
    import { cn } from "~/lib/utils";

    const props = defineProps<{
        class?: HTMLAttributes["class"];
    }>();

    const z = zodConfig();
    const formSchema = toTypedSchema(
        // TODO: Fix this error
        // @ts-ignore
        z.object({
            email: z.email(),
            password: z.string().nonempty("Пароль не может быть пустым"),
        })
    );

    const form = useForm({
        validationSchema: formSchema,
    });

    const onSubmit = form.handleSubmit((values) => {
        console.log("Form submitted!", values);
    });
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card>
            <CardHeader>
                <CardTitle class="text-center text-2xl uppercase">
                    Euphoria
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form @submit="onSubmit">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-3">
                            <FormField v-slot="{ componentField }" name="email">
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input v-bind="componentField" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>
                        <div class="flex flex-col gap-3">
                            <FormField
                                v-slot="{ componentField }"
                                name="password"
                            >
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            v-bind="componentField"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>

                        <div class="flex flex-col gap-3">
                            <Button type="submit" class="w-full">
                                Войти
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
