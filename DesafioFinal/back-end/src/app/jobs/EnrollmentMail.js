import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { members, studentExist, planExist } = data;

    console.log('A fila executou!');
    await Mail.sendMail({
      to: `${studentExist.name} <${studentExist.email}>`,
      subject: 'Matrículado com sucesso!',
      template: 'enrollment',
      context: {
        name: studentExist.name,
        title: planExist.title,
        price: members.price,
        end_date: format(
          parseISO(members.end_date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new EnrollmentMail();
