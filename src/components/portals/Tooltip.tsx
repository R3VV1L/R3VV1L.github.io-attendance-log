/*
Порталы (Portals) - это механизм в React,
который позволяет рендерить дочерние элементы в DOM-узлы,
которые находятся вне иерархии компонентов React.
Для использования портала вставить код в компонет и добавить стили

const Tooltip = ({
                     text,
                     children,
                 }: {
    text: string;
    children: React.ReactNode;
}) => {
    const [visible, setVisible] = useState(false);

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {visible &&
                ReactDOM.createPortal(
                    <div className="tooltip">{text}</div>,
                    document.body
                )}
        </>
    );
};
*/
