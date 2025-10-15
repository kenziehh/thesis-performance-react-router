export default function Drawer({
    children,
    onClose,
}: {
    children: React.ReactNode
    onClose: () => void
}) {
    return (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
            <div className="absolute inset-y-0 right-0 flex w-4/5 max-w-sm flex-col bg-white shadow-xl">{children}</div>
        </div>
    )
}
