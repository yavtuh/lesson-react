import './Card.css';

const Card = (props) => {
    const { card } = props;
    const finishedModules = card.finishedModules ?? 0;
    const modulesAprove = finishedModules * 100 / card.modules;
    const hours = Math.floor(card.duration / 3600);
    const minutes = Math.floor((card.duration % 3600) / 60);

    return (
    <div className="card">
        <div className="image__container">
            <img
                src={card.image}
                alt=""
            />
        <div className="level">{card.level}</div>
        {card.isMyCource ??  <div className="myCourse">My Course</div>}
        </div>
        <h3 className="card__title">{card.title}</h3>

        <div className="card__info">
        <div className="user">
            <img
            src={card.user.avatar}
            alt={card.user.name}
            />
            <p>{card.user.name}</p>
        </div>
        <div className="rating">
            <p>{card.rating}</p>
        </div>
        </div>

        <div>
        <progress value={modulesAprove} max="100">
            {modulesAprove}%
        </progress>
        <div className="card__info">
            <p>{card.finishedModules ?? 0} / {card.modules} Modules</p>
            <div>{modulesAprove} %</div>
        </div>
        </div>

        <div className="card__info">
        <div>{card.students} Student</div>
        <div>{card.modules} Modules</div>
        <div>{hours}h {minutes}m</div>
        </div>
    </div>
  );
};

export default Card;
