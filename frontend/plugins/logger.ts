import consola from "consola";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            log: consola.withTag("app"), // Додає тег для логів
            errorLog: (error: any) => {
                const status = error.response?.status || "Unknown";
                const message = error.response?.data?.msg || error.message || "No message";

                consola.error({
                    message: `❌ [${status}] ${message}`,
                    badge: true, // Додає бейдж
                });
            },
        },
    };
});
