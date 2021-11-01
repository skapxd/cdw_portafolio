import Style from './Icons.module.sass'

export enum ArrowIconDirection {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Rigth = 'Rigth'
}

interface ArrowIconI {
    className?: string
    'data-cy'?: string
    direction?: ArrowIconDirection
    onClick?: () => void
}

export default function ArrowIcon(props: ArrowIconI) {
    const {
        onClick,
        direction,
        className = '',
        'data-cy': data_cy = ''
    } = props

    const dic = {
        Up: Style.arrow_up,
        Down: Style.arrow_down,
        Left: Style.arrow_left,
        Rigth: Style.arrow_rigth
    }

    const axis = dic[direction ?? ArrowIconDirection.Rigth]

    return (
        <svg
            // data-cy={data_cy}
            onClick={() => onClick && onClick()}
            viewBox="0 0 96 96"
            className={`${Style.arrow} ${axis} ${className}`}
            enableBackground="new 0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z" />
        </svg>
    )
}
