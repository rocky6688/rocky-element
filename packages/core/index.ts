import { makeInstaller } from "@rocky-element/utils";
import components from "./components";
import '@rocky-element/theme/index.css'

const installer = makeInstaller(components);

export * from "@rocky-element/components";
export default installer;