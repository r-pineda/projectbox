import { AppShortcutsAPI, LaunchQuickAction, QuickAction } from "./app-shortcuts.common";
export declare class AppShortcuts implements AppShortcutsAPI {
    private supported();
    available(): Promise<boolean>;
    configureQuickActions(actions: Array<QuickAction>): Promise<any>;
    setQuickActionCallback(callback: (data: LaunchQuickAction) => void): void;
}
