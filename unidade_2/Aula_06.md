Código funcional com a média dos alunos
def calcular_media(nota1, nota2): media = (nota1 + nota2) / 2 return media

Exemplo de uso
nota1 = float(input("Digite a primeira nota: ")) nota2 = float(input("Digite a segunda nota: "))

media = calcular_media(nota1, nota2)

print(f"Média do aluno: {media:.2f}")

Versão Neutra
nota1 = float(input()) nota2 = float(input())

media = (nota1 + nota2) / 2

print(media)

Versão Persona
def calcular_media(nota1: float, nota2: float) -> float: if not (0 <= nota1 <= 10 and 0 <= nota2 <= 10): raise ValueError("Notas devem estar entre 0 e 10.")

return (nota1 + nota2) / 2
def main(): try: nota1 = float(input("Primeira nota: ")) nota2 = float(input("Segunda nota: "))

    media = calcular_media(nota1, nota2)

    print(f"Média: {media:.2f}")

except ValueError as e:
    print(f"Erro: {e}")
if name == "__main__": main()

Versão restritiva
nota1 = float(input()) nota2 = float(input()) media = (nota1 + nota2) / 2 print(f"{media:.2f}"

🧑‍💻 Versão Persona (desenvolvedor sênior arrogante)
Clareza da resposta: Média Aderência ao pedido: Alta Excesso de contexto: Alto Qualidade do código: Alta Organização: Alta Tom apropriado: Baixo Código limpo: Sim, mas com elementos desnecessários para o problema simples Taxa de alucinação: Baixa

⚖️ Versão Neutra
Clareza da resposta: Alta Aderência ao pedido: Alta Excesso de contexto: Nenhum Qualidade do código: Adequada Organização: Alta Tom apropriado: Alto Código limpo: Sim Taxa de alucinação: Nula

🔒 Versão Restritiva
Clareza da resposta: Alta Aderência ao pedido: Muito alta Excesso de contexto: Nenhum Qualidade do código: Alta (dentro das restrições) Organização: Alta Tom apropriado: Alto Código limpo: Sim (mínimo e direto) Taxa de alucinação: Nula
