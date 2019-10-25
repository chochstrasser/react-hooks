/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-labels */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-undef
export const MyComponent = React.memo(({ width, onChildClose, ...props }) => {
  const styled = useMemo(
    width => {
      {
        color: "white", width;
      }
    },
    [width]
  );
  const onClose = useCallback(() => {
    console.log("I'm closing!");
    onChildClose();
  }, [onChildClose]);
  return <ChildComponent title="Child" style={styled} hasFamily onClose={onClose} />;
});
