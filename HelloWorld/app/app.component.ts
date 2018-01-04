import {Component} from "@angular/core";
import * as webViewModule from "tns-core-modules/ui/web-view";

@Component({
    selector: "my-app",
    template: `<Page>
        <WebView src="https://www.phodal.com"></WebView>
    </Page>`
})

export class AppComponent {
    ngOnInit() {
        let webView = new webViewModule.WebView();
        webView.on(webViewModule.WebView.loadFinishedEvent, function (args: webViewModule.LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading " + args.url;
            }
            else {
                message = "Error loading " + args.url + ": " + args.error;
            }

        });
        webView.src = "https://www.phodal.com/";
    }
}
