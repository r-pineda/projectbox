export interface QuickAction {
    type: string;
    title: string;
    subtitle?: string;
    iconType?: any;
    iconTemplate?: string;
}
export interface LaunchQuickAction {
    type?: string;
    localizedTitle?: string;
}
export interface AppShortcutsAPI {
    available(): Promise<boolean>;
    configureQuickActions(actions: Array<QuickAction>): Promise<any>;
    setQuickActionCallback(callback: (data: LaunchQuickAction) => void): void;
}
