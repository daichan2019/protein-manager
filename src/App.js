import React, { useCallback, useEffect, useState } from "react";
import { UserConfig } from "./components/UserConfig";
import { FoodInput } from "./components/FoodInput";
import { Foods } from "./components/Foods";
import { Progress } from "./components/Progress";

export const App = () => {
  // State Settings
  const [userConfig, setUserConfig] = useState({
    sex: "",
    age: "",
  });
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(null);
  const [foods, setFoods] = useState([]);
  const [proteinValue, setProteinValue] = useState([0]);
  const [progress, setProgress] = useState(0);

  const totalProtein = proteinValue.reduce((acc, current) => acc + current);

  console.log(amount);

  // Methods
  const handleInputValue = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  const handleUserConfigChange = useCallback(
    (e) => {
      const name = e.target.name;
      setUserConfig({
        ...userConfig,
        [name]: e.target.value,
      });
    },
    [userConfig]
  );

  const defineAmount = () => {
    const userConfigJSON = JSON.stringify(userConfig);
    const amountBefore =
      userConfigJSON === JSON.stringify({ sex: "男性", age: "15〜17" })
        ? 65
        : userConfigJSON === JSON.stringify({ sex: "男性", age: "18〜29" })
        ? 60
        : userConfigJSON === JSON.stringify({ sex: "男性", age: "30〜49" })
        ? 60
        : userConfigJSON === JSON.stringify({ sex: "男性", age: "50〜69" })
        ? 60
        : userConfigJSON === JSON.stringify({ sex: "女性", age: "15〜17" })
        ? 55
        : userConfigJSON === JSON.stringify({ sex: "女性", age: "18〜29" })
        ? 50
        : userConfigJSON === JSON.stringify({ sex: "女性", age: "30〜49" })
        ? 50
        : userConfigJSON === JSON.stringify({ sex: "女性", age: "50〜69" })
        ? 50
        : null;

    setAmount(amountBefore);
  };

  const addFood = () => {
    if (value !== null) {
      setFoods([...foods, { name: value.name, protein: value.protein }]);
      setProteinValue([...proteinValue, value.protein]);
      setValue(null);
    }
  };

  useEffect(() => {
    const normalizeValue = (value) => (value / amount) * 100;
    setProgress(normalizeValue(totalProtein));
  }, [amount, totalProtein]);

  return (
    <div>
      <UserConfig
        userConfig={userConfig}
        amount={amount}
        defineAmount={defineAmount}
        handleUserConfigChange={handleUserConfigChange}
      />
      <FoodInput
        addFood={addFood}
        handleInputValue={handleInputValue}
        value={value}
        amount={amount}
      />
      <Foods foods={foods} />
      <Progress
        totalProtein={totalProtein}
        progress={progress}
        amount={amount}
      />
    </div>
  );
};
