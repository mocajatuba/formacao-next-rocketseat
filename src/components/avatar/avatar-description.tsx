type AvatarDescriptionProps = {
    children: React.ReactNode;
}

export const AvatarDescriprion = ({children}: AvatarDescriptionProps) => {
    return (
        <div className="text-gray-300 text-body-xs">
            {children}
        </div>
    )
}