import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const trybeClub = new Clube();
const quadra = new QuadraFutebol();

trybeClub.adicionarQuadra(quadra);

const dataReserva = new Date('2023-04-01');

const reserva = quadra.reservar(dataReserva);

console.log(reserva);
