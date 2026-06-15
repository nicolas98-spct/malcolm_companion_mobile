export async function impact(style = 'Medium') {
  const Haptics = await import('expo-haptics').catch(() => null);
  const impactStyle = Haptics?.ImpactFeedbackStyle?.[style] ?? Haptics?.ImpactFeedbackStyle?.Medium;
  Haptics?.impactAsync?.(impactStyle);
}

export async function notify(type = 'Success') {
  const Haptics = await import('expo-haptics').catch(() => null);
  const notificationType = Haptics?.NotificationFeedbackType?.[type] ?? Haptics?.NotificationFeedbackType?.Success;
  Haptics?.notificationAsync?.(notificationType);
}
