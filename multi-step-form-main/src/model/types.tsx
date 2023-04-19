export interface AddOn {
  id: number;
  isPicked: boolean;
  title: string;
  description: string;
  priceMonthly: number;
}

export interface Plan {
  id: number;
  icon: string;
  name: string;
  priceYearly: number;
  activated: boolean;
}
