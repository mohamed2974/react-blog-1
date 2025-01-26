export default function Status({ children, status = 'Bald', className }) {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Container für den Inhalt */}
            <div className={`flex items-center justify-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg`}>
                <span className="text-gray-500 font-medium">{children}</span>
            </div>
            {/* Badge für "Bald verfügbar" */}
            <div className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-md">
                {status}
            </div>
        </div>
    );
}
