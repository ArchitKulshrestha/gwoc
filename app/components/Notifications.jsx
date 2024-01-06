import { getNotifications } from "@/sanity/utilsSanity";

const Notifications = async () => {
  const notifications = await getNotifications();

  return (
    <div className="pb-4">
      <h2 className="text-lg sm:text-xl font-semibold text-text-800">
        Notifications.
      </h2>
      <div>
        <ul className="list-disc list-inside py-4">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="mt-2 text-base sm:text-lg font-normal  text-secondary-600 ">
              {notification.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
