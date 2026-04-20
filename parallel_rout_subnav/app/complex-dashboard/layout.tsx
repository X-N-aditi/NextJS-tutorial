export default function ComplexDashboardLayout({
    children,
    user,
    revenue,
    notifications
}: {
    children: React.ReactNode;
    user: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;

}) {
    return (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex"}}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{ user }</div>
                    <div>{ revenue }</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{ notifications }</div>
            </div>
        </div>
    );
}