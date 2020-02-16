import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { members, student, plan } = data;

    console.log('A fila executou!');
    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Matrículado com sucesso!',
      template: 'membership',
      context: {
        name: student.name,
        title: plan.title,
        price: members.price,
        end_date: format(
          parseISO(members.end_date),
          "'dia' dd 'de' MMMM 'de' yyyy', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new EnrollmentMail();
