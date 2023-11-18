import { isDevMode } from "@angular/core";

export let baseUrl: string;
if (isDevMode()) {
    baseUrl = "http://localhost:8081";
} else {
    baseUrl = "https://api.freefoodparty.com";
}