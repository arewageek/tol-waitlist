export type Sender = {
  first_name: string;
  last_name: string;
  username: string;
  id: number;
  is_forum?: false;
  title?: string;
  type?: string;
};

export async function welcomeMessage({
  firstName,
}: {
  firstName: string;
}): Promise<string> {
  const message = `Hey ${firstName}! it's great to have you on The Open Network \n
  Our waitlist is currently ongoing. Please tap on the button below to join our waitlist`;

  console.log({ message });

  return message;
}
