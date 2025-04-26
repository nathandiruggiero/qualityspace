"use server"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
  formType?: string
}

export async function submitContactForm(formData: FormData) {
  try {
    // Récupérer les données du formulaire
    const name = formData.name
    const email = formData.email
    const subject = formData.subject
    const message = formData.message
    const formType = formData.formType || "contact"

    // Construire le corps de l'email
    const emailBody = `
      Nouveau message de ${formType} :
      
      Nom: ${name}
      Email: ${email}
      Sujet: ${subject}
      Message: ${message}
    `

    // Envoyer l'email (exemple avec un service d'email)
    // Vous pouvez utiliser des services comme SendGrid, Mailgun, etc.

    // Pour cet exemple, nous allons simplement simuler l'envoi
    console.log("Email envoyé:", emailBody)

    // Dans un environnement de production, vous utiliseriez un service d'email comme:
    // await sendEmail({
    //   to: 'qualityspacewi@gmail.com',
    //   subject: `Nouveau message de ${formType}: ${subject}`,
    //   text: emailBody
    // })

    // Retourner une réponse de succès
    return { success: true, message: "Votre message a été envoyé avec succès!" }
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error)
    return { success: false, message: "Une erreur est survenue lors de l'envoi de votre message." }
  }
}
