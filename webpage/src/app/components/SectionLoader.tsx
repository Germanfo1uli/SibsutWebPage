export default function SectionLoader() {
    return (
        <div className="w-full h-96 bg-gradient-to-r from-[var(--foreground)]/5 to-[var(--foreground)]/10 animate-pulse rounded-lg flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block h-8 w-8 border-4 border-[var(--accent)]/30 border-t-[var(--accent)] rounded-full animate-spin"></div>
                <p className="mt-4 text-[var(--foreground)]/60">Загрузка...</p>
            </div>
        </div>
    );
}
