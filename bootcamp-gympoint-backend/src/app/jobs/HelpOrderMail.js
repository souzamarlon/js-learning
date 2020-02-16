import Mail from '../../lib/Mail';

class HelpOrderMail {
  get key() {
    return 'HelpOrderMail';
  }

  async handle({ data }) {
    const { name, email, question, answer } = data;

    console.log('A fila executou!');
    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Resposta da sua dúvida!',
      template: 'helporder',
      context: {
        name,
        question,
        answer,
      },
    });
  }
}

export default new HelpOrderMail();
